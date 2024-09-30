
export default function HelpCenter(){

    return(
        <div className="mx-5 font-jost">
            <h1 className="text-2xl font-bold underline">HELP CENTER</h1>
<div className="flex flex-col gap-5">
  <div className="bg-white p-5 rounded-md min-h-[300px]"> 
    <h2 className="text-xl font-semibold">Profile Management</h2>
    <ul className="list-disc ml-5 mt-2">
      <li><a href="/help/profile/create" className="text-blue-600">How to Create a Profile</a></li>
      <li><a href="/help/profile/edit" className="text-blue-600">How to Edit Profile Information</a></li>
      <li><a href="/help/profile/delete" className="text-blue-600">Deactivate/Delete Account</a></li>
    </ul>
  </div>
  <div className="bg-white p-5 rounded-md">
    <h2 className="text-xl font-semibold">Privacy and Security</h2>
    <ul className="list-disc ml-5 mt-2">
      <li><a href="/help/privacy/settings" className="text-blue-600">Privacy Settings</a></li>
      <li><a href="/help/privacy/block" className="text-blue-600">Blocking and Reporting Users</a></li>
    </ul>
  </div>
</div>

        </div>
    )
}