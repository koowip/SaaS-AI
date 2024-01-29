import { UserButton } from "@clerk/nextjs";

const Page = () => {
  return ( 
    <div>
      <div>Dashboard, only seen if signed in</div>
      <UserButton afterSignOutUrl="/"/>
    </div>
   );
}
 
export default Page;