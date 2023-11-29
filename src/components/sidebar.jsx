import Button from "./button";

export default function Sidebar({ showSidebar, setShowSidebar }) {
  return (
    <>
      <aside
        onClick={() => setShowSidebar(false)}
        className={
          "fixed h-screen bg-white top-0 left-0 z-50 duration-500" +
          (showSidebar ? "w-[calc(100vw-100px)]" : "w-0")
        }
      >
        {showSidebar && (
          <div className="w-80 flex flex-col justify-center p-4 gap-10 text-xl font-semibold">
            <h1>ABOUT</h1>
            <h1>PRICING</h1>
            <h1>CONTACT</h1>
            <Button
              href="/login"
              className="px-3 py-2 rounded-lg text-center"
              variant="blue"
            >
              Login
            </Button>
          </div>
        )}
      </aside>
    </>
  );
}
