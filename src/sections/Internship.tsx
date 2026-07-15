import { useState } from 'react';
import { File, FolderOpen, Terminal as TermIcon, Code } from 'lucide-react';
import { internshipData } from '../data/portfolioData';

type ActiveFile = 'training.log' | 'tasks_assigned.json' | 'project_specs.md';

export default function Internship() {
  const [activeFile, setActiveFile] = useState<ActiveFile>('training.log');
  const [terminalOutput, setTerminalOutput] = useState<string[]>(['Softpro India Development Server (v1.0.0) online.', 'Type "help" or run commands.']);
  const [terminalInput, setTerminalInput] = useState('');

  const runTerminalCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    let response = '';

    if (cmd === 'help') {
      response = 'Available commands: help, clear, artisan, test-db, fetch-logs';
    } else if (cmd === 'clear') {
      setTerminalOutput([]);
      setTerminalInput('');
      return;
    } else if (cmd === 'artisan' || cmd === 'php artisan inspire') {
      response = 'Inspiring Laravel: "Simplicity is the ultimate sophistication."';
    } else if (cmd === 'test-db') {
      response = 'Testing MySQL connections... SUCCESS. 6 tables found.';
    } else if (cmd === 'fetch-logs') {
      response = 'Fetching Softpro India logs: 6 Weeks PHP & Laravel Internship Completed.';
    } else if (cmd) {
      response = `Command "${cmd}" not recognized. Type "help" for a list of commands.`;
    }

    if (cmd) {
      setTerminalOutput((prev) => [...prev, `pragya@softpro:~$ ${terminalInput}`, response]);
    }
    setTerminalInput('');
  };

  return (
    <section
      id="journey"
      className="relative min-h-screen flex flex-col justify-center bg-[#050816] px-6 py-24 overflow-hidden border-b border-white/5"
    >
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#22D3EE]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-20">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-[#22D3EE] tracking-[0.3em] uppercase">Experience</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-[#F8FAFC]">
            Internship Highlight
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] mx-auto mt-4" />
        </div>

        {/* Internship details header card */}
        <div className="mb-12 max-w-4xl mx-auto rounded-2xl border border-[#7C3AED]/20 bg-[#7C3AED]/5 p-6 md:p-8 backdrop-blur-md text-left flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-xs text-[#22D3EE] tracking-wide uppercase">COMPANY WORK</span>
            <h3 className="text-2xl font-bold text-[#F8FAFC] tracking-tight">{internshipData.company}</h3>
            <p className="text-sm text-[#94A3B8] font-medium">{internshipData.role} — <span className="text-[#22D3EE]">{internshipData.duration}</span></p>
          </div>
          <div className="flex flex-wrap gap-2">
            {internshipData.techUsed.map((tech, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-md bg-[#0F172A] border border-white/10 text-xs font-mono text-[#F8FAFC]">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Laptop / IDE Mockup Container */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-white/15 bg-[#050816] shadow-2xl overflow-hidden relative">
          
          {/* Laptop Top Bezel Bar (Visual indicators) */}
          <div className="h-10 bg-[#0F172A] border-b border-white/10 flex items-center justify-between px-4">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#EF4444] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#FACC15] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#22C55E] inline-block" />
            </div>
            <span className="font-mono text-xs text-[#94A3B8] select-none">
              workspace - VS Code Mock (softpro_india)
            </span>
            <div className="w-12 h-2" />
          </div>

          {/* IDE Content Area */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px] text-left">
            
            {/* Sidebar (File tree explorer) */}
            <div className="md:col-span-3 bg-[#0a0f1d] border-r border-white/5 p-4 flex flex-col gap-4 font-mono text-xs select-none">
              
              <div className="flex items-center gap-2 text-[#94A3B8] uppercase tracking-wider font-bold text-[10px]">
                <FolderOpen size={14} className="text-[#7C3AED]" />
                <span>WORKSPACE Explorer</span>
              </div>
              
              <div className="flex flex-col gap-2 pl-2">
                
                {/* Main directory */}
                <div className="flex items-center gap-1.5 text-[#F8FAFC]">
                  <FolderOpen size={14} className="text-[#22D3EE]" />
                  <span>softpro_internship</span>
                </div>

                {/* Subfiles */}
                <div className="flex flex-col gap-1.5 pl-4">
                  <button
                    onClick={() => setActiveFile('training.log')}
                    className={`flex items-center gap-1.5 text-left py-1 px-2 rounded cursor-pointer transition-all ${
                      activeFile === 'training.log'
                        ? 'bg-[#7C3AED]/20 text-[#22D3EE] font-semibold'
                        : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                    }`}
                  >
                    <File size={12} />
                    <span>training.log</span>
                  </button>

                  <button
                    onClick={() => setActiveFile('tasks_assigned.json')}
                    className={`flex items-center gap-1.5 text-left py-1 px-2 rounded cursor-pointer transition-all ${
                      activeFile === 'tasks_assigned.json'
                        ? 'bg-[#7C3AED]/20 text-[#22D3EE] font-semibold'
                        : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                    }`}
                  >
                    <File size={12} />
                    <span>tasks_assigned.json</span>
                  </button>

                  <button
                    onClick={() => setActiveFile('project_specs.md')}
                    className={`flex items-center gap-1.5 text-left py-1 px-2 rounded cursor-pointer transition-all ${
                      activeFile === 'project_specs.md'
                        ? 'bg-[#7C3AED]/20 text-[#22D3EE] font-semibold'
                        : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                    }`}
                  >
                    <File size={12} />
                    <span>project_specs.md</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Main Code View Editor */}
            <div className="md:col-span-9 bg-[#050816]/95 p-6 flex flex-col justify-between font-mono text-xs md:text-sm">
              
              {/* Tab Header */}
              <div className="flex border-b border-white/5 pb-4 mb-4 select-none">
                <span className="px-3 py-1 bg-white/5 text-[#22D3EE] border-b border-[#22D3EE] rounded-t flex items-center gap-1.5">
                  <Code size={12} />
                  {activeFile}
                </span>
              </div>

              {/* Code Contents */}
              <div className="flex-grow overflow-y-auto max-h-[300px] mb-6 pr-2">
                {activeFile === 'training.log' && (
                  <pre className="text-[#94A3B8] leading-relaxed whitespace-pre-wrap">
                    <span className="text-[#22D3EE]"># WEEK 1-2: Core PHP Refinement</span>{'\n'}
                    - Deep dive into PHP OOP concepts, visibility keywords, inheritance.{'\n'}
                    - Learnt relational data modeling and MySQL index optimizations.{'\n\n'}
                    <span className="text-[#22D3EE]"># WEEK 3-4: Laravel Ecosystem</span>{'\n'}
                    - Studied Laravel Service Providers, Middleware layers, Eloquent ORM.{'\n'}
                    - Built routing architectures for admin & department controls.{'\n\n'}
                    <span className="text-[#22D3EE]"># WEEK 5-6: System Integrations</span>{'\n'}
                    - Deployed mock portals, hooked Bootstrap responsive CSS styles.{'\n'}
                    - Configured staging databases, resolved local merge conflicts.{'\n'}
                  </pre>
                )}

                {activeFile === 'tasks_assigned.json' && (
                  <pre className="text-[#e2e8f0] leading-relaxed">
                    <span className="text-[#a855f7]">{`{`}</span>{'\n'}
                    <span className="text-[#22D3EE]">{`  "tasks": [`}</span>{'\n'}
                    {`    {`}
                    <span className="text-[#22D3EE]">{` "name"`}</span>{`: "Refactor queries",`}
                    <span className="text-[#22D3EE]">{` "status"`}</span>{`: "Completed"`}
                    {` },`}{'\n'}
                    {`    {`}
                    <span className="text-[#22D3EE]">{` "name"`}</span>{`: "Build dynamic templates",`}
                    <span className="text-[#22D3EE]">{` "status"`}</span>{`: "Completed"`}
                    {` },`}{'\n'}
                    {`    {`}
                    <span className="text-[#22D3EE]">{` "name"`}</span>{`: "Configure Laravel Middleware",`}
                    <span className="text-[#22D3EE]">{` "status"`}</span>{`: "Completed"`}
                    {` }`}{'\n'}
                    <span className="text-[#22D3EE]">{`  ],`}</span>{'\n'}
                    <span className="text-[#22D3EE]">{`  "database_migrations"`}</span>{`: true,`}{'\n'}
                    <span className="text-[#22D3EE]">{`  "collaborative_git_merge"`}</span>{`: true`}{'\n'}
                    <span className="text-[#a855f7]">{`}`}</span>
                  </pre>
                )}

                {activeFile === 'project_specs.md' && (
                  <pre className="text-[#94A3B8] leading-relaxed whitespace-pre-wrap">
                    <span className="text-[#22D3EE]"># INTERNSHIP PROJECTS SPECS</span>{'\n\n'}
                    During training, we simulated a live clinic/canteen pre-ordering pipeline. 
                    I developed responsive grid templates, handled session cookies, and built 
                    secure REST endpoints that accept input data parameters, validate client forms, 
                    and return query results in formatted displays.{'\n\n'}
                    <span className="text-[#22D3EE]">- Frontend:</span> Bootstrap 5 grids, custom components.{'\n'}
                    <span className="text-[#22D3EE]">- Backend:</span> Laravel Eloquent relationships, Query builder.{'\n'}
                    <span className="text-[#22D3EE]">- Testing:</span> Local Apache servers, sandbox environments.{'\n'}
                  </pre>
                )}
              </div>

              {/* Bottom IDE terminal */}
              <div className="border-t border-white/5 pt-4">
                <div className="flex items-center gap-1.5 text-xs text-[#22D3EE] mb-2 select-none">
                  <TermIcon size={12} />
                  <span>Terminal</span>
                </div>
                
                <div className="bg-[#020617] rounded-lg p-3 max-h-[120px] overflow-y-auto text-left font-mono text-xs">
                  {terminalOutput.map((line, idx) => (
                    <div key={idx} className="text-[#94A3B8] mb-1">
                      {line}
                    </div>
                  ))}
                  
                  <form onSubmit={runTerminalCommand} className="flex items-center mt-1">
                    <span className="text-[#22D3EE] mr-1">pragya@softpro:~$</span>
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      className="bg-transparent border-none outline-none flex-grow text-[#F8FAFC] caret-[#22D3EE]"
                      placeholder="Type 'help'..."
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
