export default function Socials() {
    return (<div className="fixed left-6 bottom-6 flex flex-col items-center space-y-4 z-50 ">
        <a href="https://github.com/saltivity" target="_blank">
            <img src="github.png" className="w-6 h-6 hover:opacity-70"></img>
        </a>
        <a href="https://www.linkedin.com/in/allison-wang-9a7267277/" target="_blank">
            <img src="linkedin.png" className="w-8 h-8 hover:opacity-70"></img>
        </a>

        <a href="mailto:allisonqingwang@gmail.com">
        <img src="mail.png" className="w-6 h-6 hover:opacity-70" />
      </a>
        
    </div>);
}