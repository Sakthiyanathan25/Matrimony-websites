
export default function Settings(){

    return (
        <div className="mx-5 font-jost">
            <h1 className="font-bold text-3xl">SETTINGS</h1>
            <div className="mx-10 flex h-[600px] flex-col justify-center items-center gap-5">
                  <button className="h-14 w-[200px] bg-red-700 hover:bg-red-600 text-white rounded ">Change Password</button>
                  <button className="h-14 w-[200px] bg-red-700 hover:bg-red-600 text-white rounded ">Change Email Request</button>
                  <button className="h-14 w-[200px] bg-red-700 hover:bg-red-600 text-white rounded ">Change Mobile Request</button>
                  <button className="h-14 w-[200px] bg-red-700 hover:bg-red-600 text-white rounded ">Deactive / Delete Request</button>

            </div>
        </div>

    )
}