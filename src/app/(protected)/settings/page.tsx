import { auth } from "@/app/auth";

export default async function SettingsPage(){
    const session = await auth();
    console.log(session);

    return <>
        <div>
            <p>Setting page</p>
            {JSON.stringify(session)}
        </div>
    </>;
}