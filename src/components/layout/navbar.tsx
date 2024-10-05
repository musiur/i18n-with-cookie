import TweakLanguage from "@/dictionary/tweak-language";

const Navbar = () => {
  return (
    <nav className="border py-4">
      <div className="container flex items-center justify-between">
        <p className="text-4xl font-bold">i18n</p>
        <TweakLanguage />
      </div>
    </nav>
  );
};

export default Navbar;
