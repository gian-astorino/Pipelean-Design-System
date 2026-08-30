"use client";

import * as React from "react";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  BellIcon,
  BookmarkIcon,
  BugIcon,
  CalendarBlankIcon,
  CameraIcon,
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
  CaretUpIcon,
  ChartBarIcon,
  ChartLineIcon,
  ChartPieIcon,
  ChatCircleDotsIcon,
  ChatCircleIcon,
  CheckCircleIcon,
  CheckIcon,
  ClockIcon,
  CloudSunIcon,
  CodeIcon,
  CopyIcon,
  CreditCardIcon,
  DatabaseIcon,
  DotsThreeIcon,
  DotsThreeVerticalIcon,
  DownloadSimpleIcon,
  EnvelopeIcon,
  EnvelopeSimpleIcon,
  EyeIcon,
  EyeSlashIcon,
  FileIcon,
  FileTextIcon,
  FlagIcon,
  FolderSimpleIcon,
  FunnelIcon,
  GearIcon,
  GearSixIcon,
  GlobeIcon,
  GridFourIcon,
  HeartIcon,
  HouseIcon,
  ImageIcon,
  InfoIcon,
  LightningIcon,
  LinkIcon,
  LinkSimpleIcon,
  ListBulletsIcon,
  LockIcon,
  LockOpenIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  MinusIcon,
  MoonIcon,
  PackageIcon,
  PauseIcon,
  PencilSimpleIcon,
  PhoneIcon,
  PlayIcon,
  PlusIcon,
  PrinterIcon,
  RocketIcon,
  RocketLaunchIcon,
  ShareIcon,
  ShareNetworkIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  SignInIcon,
  SignOutIcon,
  SlidersHorizontalIcon,
  SparkleIcon,
  SpeakerHighIcon,
  SpeakerXIcon,
  SquaresFourIcon,
  StarIcon,
  StopIcon,
  SunIcon,
  TableIcon,
  TagIcon,
  TerminalIcon,
  ThumbsUpIcon,
  TrashIcon,
  TruckIcon,
  UploadSimpleIcon,
  UserIcon,
  UsersIcon,
  WalletIcon,
  WarningCircleIcon,
  WrenchIcon,
  XCircleIcon,
  XIcon,
  type Icon,
} from "@phosphor-icons/react";

import { copyToClipboard } from "@/lib/clipboard";
import { Input } from "@/components/ui/input";

const ICONS: { name: string; Icon: Icon }[] = [
  { name: "HouseIcon", Icon: HouseIcon },
  { name: "MagnifyingGlassIcon", Icon: MagnifyingGlassIcon },
  { name: "BellIcon", Icon: BellIcon },
  { name: "UserIcon", Icon: UserIcon },
  { name: "UsersIcon", Icon: UsersIcon },
  { name: "GearIcon", Icon: GearIcon },
  { name: "GearSixIcon", Icon: GearSixIcon },
  { name: "SignOutIcon", Icon: SignOutIcon },
  { name: "SignInIcon", Icon: SignInIcon },
  { name: "PlusIcon", Icon: PlusIcon },
  { name: "MinusIcon", Icon: MinusIcon },
  { name: "XIcon", Icon: XIcon },
  { name: "CheckIcon", Icon: CheckIcon },
  { name: "CheckCircleIcon", Icon: CheckCircleIcon },
  { name: "XCircleIcon", Icon: XCircleIcon },
  { name: "WarningCircleIcon", Icon: WarningCircleIcon },
  { name: "InfoIcon", Icon: InfoIcon },
  { name: "TrashIcon", Icon: TrashIcon },
  { name: "PencilSimpleIcon", Icon: PencilSimpleIcon },
  { name: "CopyIcon", Icon: CopyIcon },
  { name: "DownloadSimpleIcon", Icon: DownloadSimpleIcon },
  { name: "UploadSimpleIcon", Icon: UploadSimpleIcon },
  { name: "ArrowRightIcon", Icon: ArrowRightIcon },
  { name: "ArrowLeftIcon", Icon: ArrowLeftIcon },
  { name: "ArrowUpIcon", Icon: ArrowUpIcon },
  { name: "ArrowDownIcon", Icon: ArrowDownIcon },
  { name: "CaretRightIcon", Icon: CaretRightIcon },
  { name: "CaretLeftIcon", Icon: CaretLeftIcon },
  { name: "CaretUpIcon", Icon: CaretUpIcon },
  { name: "CaretDownIcon", Icon: CaretDownIcon },
  { name: "DotsThreeIcon", Icon: DotsThreeIcon },
  { name: "DotsThreeVerticalIcon", Icon: DotsThreeVerticalIcon },
  { name: "StarIcon", Icon: StarIcon },
  { name: "HeartIcon", Icon: HeartIcon },
  { name: "BookmarkIcon", Icon: BookmarkIcon },
  { name: "ShoppingCartIcon", Icon: ShoppingCartIcon },
  { name: "CreditCardIcon", Icon: CreditCardIcon },
  { name: "WalletIcon", Icon: WalletIcon },
  { name: "EnvelopeIcon", Icon: EnvelopeIcon },
  { name: "EnvelopeSimpleIcon", Icon: EnvelopeSimpleIcon },
  { name: "ChatCircleIcon", Icon: ChatCircleIcon },
  { name: "ChatCircleDotsIcon", Icon: ChatCircleDotsIcon },
  { name: "PhoneIcon", Icon: PhoneIcon },
  { name: "CalendarBlankIcon", Icon: CalendarBlankIcon },
  { name: "ClockIcon", Icon: ClockIcon },
  { name: "ImageIcon", Icon: ImageIcon },
  { name: "CameraIcon", Icon: CameraIcon },
  { name: "FileIcon", Icon: FileIcon },
  { name: "FileTextIcon", Icon: FileTextIcon },
  { name: "FolderSimpleIcon", Icon: FolderSimpleIcon },
  { name: "LinkIcon", Icon: LinkIcon },
  { name: "LinkSimpleIcon", Icon: LinkSimpleIcon },
  { name: "LockIcon", Icon: LockIcon },
  { name: "LockOpenIcon", Icon: LockOpenIcon },
  { name: "EyeIcon", Icon: EyeIcon },
  { name: "EyeSlashIcon", Icon: EyeSlashIcon },
  { name: "FunnelIcon", Icon: FunnelIcon },
  { name: "SlidersHorizontalIcon", Icon: SlidersHorizontalIcon },
  { name: "ListBulletsIcon", Icon: ListBulletsIcon },
  { name: "GridFourIcon", Icon: GridFourIcon },
  { name: "SquaresFourIcon", Icon: SquaresFourIcon },
  { name: "TableIcon", Icon: TableIcon },
  { name: "ChartBarIcon", Icon: ChartBarIcon },
  { name: "ChartLineIcon", Icon: ChartLineIcon },
  { name: "ChartPieIcon", Icon: ChartPieIcon },
  { name: "GlobeIcon", Icon: GlobeIcon },
  { name: "MapPinIcon", Icon: MapPinIcon },
  { name: "RocketIcon", Icon: RocketIcon },
  { name: "RocketLaunchIcon", Icon: RocketLaunchIcon },
  { name: "SparkleIcon", Icon: SparkleIcon },
  { name: "LightningIcon", Icon: LightningIcon },
  { name: "ShieldCheckIcon", Icon: ShieldCheckIcon },
  { name: "SunIcon", Icon: SunIcon },
  { name: "MoonIcon", Icon: MoonIcon },
  { name: "CloudSunIcon", Icon: CloudSunIcon },
  { name: "TagIcon", Icon: TagIcon },
  { name: "PackageIcon", Icon: PackageIcon },
  { name: "TruckIcon", Icon: TruckIcon },
  { name: "PrinterIcon", Icon: PrinterIcon },
  { name: "ShareIcon", Icon: ShareIcon },
  { name: "ShareNetworkIcon", Icon: ShareNetworkIcon },
  { name: "ThumbsUpIcon", Icon: ThumbsUpIcon },
  { name: "FlagIcon", Icon: FlagIcon },
  { name: "BugIcon", Icon: BugIcon },
  { name: "CodeIcon", Icon: CodeIcon },
  { name: "TerminalIcon", Icon: TerminalIcon },
  { name: "DatabaseIcon", Icon: DatabaseIcon },
  { name: "WrenchIcon", Icon: WrenchIcon },
  { name: "PlayIcon", Icon: PlayIcon },
  { name: "PauseIcon", Icon: PauseIcon },
  { name: "StopIcon", Icon: StopIcon },
  { name: "SpeakerHighIcon", Icon: SpeakerHighIcon },
  { name: "SpeakerXIcon", Icon: SpeakerXIcon },
];

function IconGallery() {
  const [query, setQuery] = React.useState("");

  const filtered = ICONS.filter((icon) =>
    icon.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div className="flex flex-col gap-4">
      <Input
        placeholder={`Cerca tra ${ICONS.length} icone Phosphor…`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="max-w-xs"
      />
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8">
        {filtered.map(({ name, Icon }) => (
          <button
            key={name}
            type="button"
            onClick={() =>
              copyToClipboard(
                `import { ${name} } from "@phosphor-icons/react";`,
                name
              )
            }
            title={name}
            className="hover:bg-accent hover:text-accent-foreground flex flex-col items-center gap-1.5 rounded-lg border p-3 text-center transition-colors"
          >
            <Icon className="size-5" />
            <span className="text-muted-foreground w-full truncate text-[10px]">
              {name.replace(/Icon$/, "")}
            </span>
          </button>
        ))}
        {filtered.length === 0 && (
          <p className="text-muted-foreground col-span-full text-sm">
            Nessuna icona corrisponde a &quot;{query}&quot;.
          </p>
        )}
      </div>
    </div>
  );
}

export { IconGallery };
