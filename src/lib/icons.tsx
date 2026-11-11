import {
  Briefcase, Cake, CalendarCheck, Camera, Eye, Flower2, Gem, GlassWater, Handshake, Heart,
  ClipboardList, Landmark, Lightbulb, Music, Palette, Shield, Sparkles, Star, Timer, UserCheck, Users, UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/config/business";

const map: Record<IconName, LucideIcon> = {
  heart: Heart,
  flower: Flower2,
  calendar: CalendarCheck,
  camera: Camera,
  sparkles: Sparkles,
  glass: GlassWater,
  cake: Cake,
  gem: Gem,
  briefcase: Briefcase,
  utensils: UtensilsCrossed,
  music: Music,
  lightbulb: Lightbulb,
  landmark: Landmark,
  palette: Palette,
  users: Users,
  shield: Shield,
  handshake: Handshake,
  eye: Eye,
  timer: Timer,
  userCheck: UserCheck,
  clipboard: ClipboardList,
  star: Star,
};

export function Icon({ name, className, strokeWidth = 1.5 }: { name: IconName; className?: string; strokeWidth?: number }) {
  const Cmp = map[name] ?? Sparkles;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
