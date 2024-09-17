import { user } from "@/data/user";
import Link from "next/link";

export const NavMyProfile = () => {
    return (
        <div className="flex items-center">
            <div className="size-10  mr-2 rounded-full overflow-hidden">
                <Link href={`/${user.slug}`}>
                    <img src={user.avatar} alt={user.name} className="size-full" />
                </Link>
            </div>
            <div className="flex flex-col flex-1 overflow-hidden">
                <Link href={`/${user.slug}`} className="block truncate">
                    {user.name}
                </Link>
                <div className="text-sm text-gray-400 truncate">
                    @{user.slug}
                </div>
            </div>
        </div>
    );
}