import type * as React from 'react';
export type Status = 'success' | 'warning' | 'danger';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'primary' | 'secondary' | 'ghost'; size?: 'md' | 'sm' }
export declare function Button(props: ButtonProps): React.ReactElement;
export interface TagProps { children: React.ReactNode; className?: string }
export declare function Tag(props: TagProps): React.ReactElement;
export interface StatusBadgeProps { status?: Status; children?: React.ReactNode; className?: string }
export declare function StatusBadge(props: StatusBadgeProps): React.ReactElement;
export interface LiveBadgeProps { children?: React.ReactNode; className?: string }
export declare function LiveBadge(props: LiveBadgeProps): React.ReactElement;
export interface AlertProps { status?: Status; title?: React.ReactNode; children?: React.ReactNode; className?: string }
export declare function Alert(props: AlertProps): React.ReactElement;
export interface AvatarProps { src: string; alt?: string; size?: 'sm' | 'md' | 'lg'; className?: string }
export declare function Avatar(props: AvatarProps): React.ReactElement;
export interface SectionHeadingProps { children: React.ReactNode; eyebrow?: React.ReactNode; level?: 1 | 2 | 3 | 4; className?: string }
export declare function SectionHeading(props: SectionHeadingProps): React.ReactElement;
export interface ProjectCardProps { title: React.ReactNode; kind?: React.ReactNode; description?: React.ReactNode; href?: string; linkLabel?: string; image?: string; imageAlt?: string; className?: string }
export declare function ProjectCard(props: ProjectCardProps): React.ReactElement;
export interface TwitchPanelProps { title: React.ReactNode; children?: React.ReactNode; className?: string }
export declare function TwitchPanel(props: TwitchPanelProps): React.ReactElement;
export interface LowerThirdProps { name: React.ReactNode; subtitle?: React.ReactNode; avatar?: string; className?: string }
export declare function LowerThird(props: LowerThirdProps): React.ReactElement;
export type IconName = 'play' | 'music' | 'book' | 'gamepad' | 'steering-wheel' | 'flag' | 'mic' | 'radio' | 'pen' | 'code' | 'calendar' | 'clock' | 'users' | 'heart' | 'star' | 'link' | 'external' | 'mail' | 'download' | 'search' | 'menu' | 'close' | 'arrow-right' | 'check' | 'info' | 'warning' | 'error';
export interface IconProps { name: IconName; size?: number; label?: string; className?: string }
export declare function Icon(props: IconProps): React.ReactElement;
export interface StreamScreenProps { variant?: 'starting' | 'brb' | 'ending' | 'offline'; avatar?: string; title?: React.ReactNode; subtitle?: React.ReactNode; detail?: React.ReactNode; className?: string }
export declare function StreamScreen(props: StreamScreenProps): React.ReactElement;
export interface StreamAlertProps { kind?: 'follow' | 'sub' | 'raid' | 'tip'; name: React.ReactNode; message?: React.ReactNode; label?: React.ReactNode; className?: string }
export declare function StreamAlert(props: StreamAlertProps): React.ReactElement;
declare global { interface Window { NexxusDrako: { Button: typeof Button; Tag: typeof Tag; StatusBadge: typeof StatusBadge; LiveBadge: typeof LiveBadge; Alert: typeof Alert; Avatar: typeof Avatar; SectionHeading: typeof SectionHeading; ProjectCard: typeof ProjectCard; TwitchPanel: typeof TwitchPanel; LowerThird: typeof LowerThird; Icon: typeof Icon; StreamScreen: typeof StreamScreen; StreamAlert: typeof StreamAlert } } }
