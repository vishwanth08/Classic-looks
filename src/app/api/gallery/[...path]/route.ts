import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const allowedExtensions = [
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".mp4",
  ".webm",
  ".ogg",
];

export async function GET(
  request: Request,
  context: {
    params: Promise<{ path: string[] }>;
  }
) {
  try {
    const { path: folderPath } = await context.params;

    const galleryPath = path.join(
      process.cwd(),
      "public",
      "images",
      "event-gallery",
      ...folderPath
    );

    if (!fs.existsSync(galleryPath)) {
      return NextResponse.json([]);
    }

    const files = fs
      .readdirSync(galleryPath)
      .filter((file) =>
        allowedExtensions.includes(
          path.extname(file).toLowerCase()
        )
      )
      .sort();

    const images = files.map((file) => {
      return `/images/event-gallery/${folderPath
        .map((part) => encodeURIComponent(part))
        .join("/")}/${encodeURIComponent(file)}`;
    });

    return NextResponse.json(images);
  } catch (error) {
    console.error("Gallery API error:", error);

    return NextResponse.json(
      { error: "Unable to load gallery images." },
      { status: 500 }
    );
  }
}