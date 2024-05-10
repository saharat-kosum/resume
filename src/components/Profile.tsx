const stacks = [
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg",
];

function Profile() {
  return (
    <div className="hero min-h-screen py-16">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-28">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6 text-gray-500">Description</p>
          <div className="flex gap-3 items-center flex-col lg:flex-row">
            <p className="font-semibold">Tech Stack</p>
            <p className="hidden lg:block">|</p>
            <div className="flex gap-2">
              {stacks.map((stack) => (
                <img src={stack} alt="stack" className="w-8 h-8" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
