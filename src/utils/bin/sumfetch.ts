import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'cveinnt') {
    return `                                                  
             @@@@@@@@@@@@@                   sumfetch: summary display
        @@@@               @@@@             -----------
      @@                       @@            ABOUT
    @@                           @@          ${config.name}
  @@                               @@       ﰩ ${config.ps1_hostname}
 @@                         @@@     @@       <u><a href="${config.resume_url}" target="_blank">Resume</a></u>
@@        @@@                        @@     爵 <u><a href="${config.repo}" target="_blank">Github Repository</a></u>
@@                                   @@     -----------
@@             .@@@@@@@@@@.          @@      CONTACT 
 @@           @@          @@        @@       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  @@           @@        @@        @@        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   @@             @@@@@@          @@         <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
     @@@                        @@@         
        @@@                  @@@ @@         
         @|  @@@@@@@@@@@@@@@@   @@          
         @|                      @@         

`;
  } else {
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  PROFILE
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              I have 10 years of experience in IT. Started in mid-2012 out of pure curiosity
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄            tinkering with creating and configuring unofficial MMORPG emulators/servers.
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           Always trying to learn and improve things, evolve and surpass goals.
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓          Addicted to doing activities smartly, efficiently and quickly.
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       -----------
▐▓                                 ▐▓        ABOUT
▐▓           > D U U D             ▐▓        ${config.name} 
▐▓                                 ▐▓        <u><a href="${config.resume_url}" target="_blank">Resume</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓       爵 <u><a href="${config.repo}" target="_blank">Github Repository</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓          -----------
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            CONTACT
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀             <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u> 
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀                <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                   <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>

`;
  }
};

export default sumfetch;
