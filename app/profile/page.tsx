import Profile from "../components/profile";

const page = () => {
    return (
        <main className="min-h-screen bg-gradient-to-b from-pink-200 via-white to-green-200 flex flex-col justify-start items-center pt-10 p-6">
            <div>
                <h1 className="font-bold text-3xl text-center">Profile</h1>
                <Profile/>
            </div>
        </main>
    );
}

export default page;