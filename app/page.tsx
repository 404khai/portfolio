
export default function Home() {
  return (
    
    <div className="w-2xl h-full flex flex-col items-center justify-between border border-dashed border-[#27272a]">
      <h1 className="text-xl text-zinc-300 font-figtree">Hey it's me, <span className="font-doto font-black tracking-tighter text-3xl text-white">Kaizel</span></h1>
      <p className="text-zinc-400 font-figtree text-md">Let's get straight to the point....</p>
      <li>
        <ul className="text-white font-figtree text-md">I'm a <b>Software Engineer</b> who is intrigued by Operating Systems, Game development, Animation and AGI.</ul>
        <ul className="text-white font-figtree text-md"><b>4+</b> years of experience in the industry, specializing in backend development with a focus on performance and scalability.</ul>
        <ul className="text-zinc-400 font-figtree text-md">Probably trying out new frameworks, or dabbling in <b>Elixir</b>, <b>Rust</b> or <b>ArkTs</b></ul>
        <ul className="text-zinc-400 font-figtree text-md">Interested in participating in more hackathons. Would love to research at Google DeepMind, Anthropic or other AI labs.</ul>
      </li>
    
    </div>
    
  );
}
