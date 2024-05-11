import profile from "../assets/profile.jpg";

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
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-12">
        <img
          src={profile}
          className="rounded-lg shadow-2xl mask mask-squircle max-w-64"
        />
        <div>
          <h1 className="lg:text-5xl font-bold text-4xl">Saharat Kosum</h1>
          <h1 className="text-xl font-bold">Front-End Developer</h1>
          <p className="py-6 text-gray-500 max-w-lg">
            Hi, I'm Saharat Kosum, but you can call me Phai. I'm a passionate
            front-end developer based in Bangkok, Thailand, eager to expand my
            skills to become a full-stack developer.
          </p>
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
