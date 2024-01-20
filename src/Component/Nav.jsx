const Nav = () => {
  return (
    <div>
      <nav className="h-20 w-11/12 m-auto">
        <div className="flex justify-between p-5 items-center">
          <div>
            <img src="../public/Images/brand_logo.png" alt="nike" />
          </div>
          <ul className="flex flex-row gap-5 cursor-pointer text-xl">
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <button className="bg-red-500 px-2 py-1 text-white text-bold rounded-sm text-xl">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
