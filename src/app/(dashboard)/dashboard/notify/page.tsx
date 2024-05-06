import BreadCrumb from "@/components/breadcrumb";
import NotifyForm from "@/components/forms/notify-form";
import { ScrollArea } from "@/components/ui/scroll-area";

const breadcrumbItems = [{ title: "Notify", link: "/dashboard/notify" }];
export default function page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <NotifyForm />
      </div>
    </ScrollArea>
  );
}
