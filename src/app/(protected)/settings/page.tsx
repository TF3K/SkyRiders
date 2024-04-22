import { auth } from "@/app/auth";

export default async function SettingsPage(){
    const session = await auth();

    <div>
        {JSON.stringify(session)}
    </div>
}