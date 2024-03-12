export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1>profile</h1>
      <hr />
      <p className="flex items-center text-center">
        Profile Page
        <p className=" bg-orange-500 px-2 rounded-sm mx-2 ">{params.id}</p>
      </p>
    </div>
  );
}
