import Card from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div>
        <Link href="/complex-dashboard/archived">Archived</Link>
      </div>
      Notifications
    </Card>
  );
}
