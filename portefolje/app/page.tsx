import Image from "next/image";

export default function Home() {

  const social = [
    {
      link: "https://www.linkedin.com/in/ahmad-faryabi/",
      icon: ""
    }
  ]

  const aboutMe = {
    noText: (<>
      Mitt navn er <b>Ahmad Faryabi</b> og er en tidligere student ved <em>OsloMet - storbyuniversitet</em>. Jeg har studert og fullført
      mitt 3 årige bachelorprogram i Dataingeniør.
      <div className="space"></div>
      Innen studie har jeg valgt å fordype meg innenfor programvareutvikling, testing og matematikk. Jeg har meget gode programmeringsferdigheter
      og veldig god evne til å vurdere løsningene jeg utvikler.
      <div className="space"></div>
      Jeg er født og oppvokst i Oslo med afghansk bakgrunn.
      <div className="space"></div>
      Gjennom oppveksten har jeg vært preget og interessert i de digitale tjenesten vi har. Fra mobiltelefoner til datamaskiner som finnes idag.
      Siden den tiden har jeg vært interessert i data og teknologi gjennom spill, venner og kreativitet.
    </>),
    enText: (<></>)
  }



  const interesser =
  {
    noText: (<>
      Når det gjelder mine <b>interesser</b> så er det å programmere løsninger som skal bidra til et bedre samfunn og bruk. Med dette inkluderer; problemløsninger,
      teoretisk kunnskap, praksis, feiling og prøving.
      <div className="space"></div>
      Sett bortifra det tekniske er jeg også interessert i å holde meg aktivt fysisk. Det gjelder blant annet sykkelturer, familie og fritid. I fritiden prøver jeg å
      bruke tiden til å lese om relevant innhold og annen allmennkunnskap. Jeg viser veldig stor interesse i matematikk, realfag, historie og religion. I og med at jeg
      er praktiserende muslim er kunnskap, tillit, tro, tålmodighet og håp en viktig og avgjørende påvirkning i alle livets faser!
    </>),
    enText: (<>
    </>)
  }
  const interestWord = [
    {
      no: "Programmering",
      en: "Programming"
    },
    {
      no: "Problemløsning",
      en: "Problemsolving"
    },
    {
      no: "Samfunn",
      en: "Society"
    },
    {
      no: "Helse",
      en: "Health"
    },
    {
      no: "Sykling",
      en: "Cycling"
    },
    {
      no: "Realfag",
      en: "Science"
    },
    {
      no: "Historie",
      en: "History"
    },
    {
      no: "Religion",
      en: "Religion"
    },
    {
      no: "Tålmodighet",
      en: "Patience"
    },
    {
      no: "Håp",
      en: "Hope"
    }
  ]

  const skills = [
    {
      no:"Teknologi",
      en:"Technology"
    },
    {
      no:"HTML",
      en:"HTML"
    },
    {
      no:"CSS",
      en:"CSS"
    },
    {
      no:"JavaScript | JS",
      en:"JavaScript | JS"
    },
    {
      no:"TypeScript | TS",
      en:"TypeScript | TS"
    },
    {
      no:".NET | C#",
      en:".NET | C#"
    },
    {
      no:"Java | Spring Boot",
      en:"Java | Spring Boot"
    },
    {
      no:"PHP",
      en:"PHP"
    },
    {
      no:"Python",
      en:"Python"
    },
    {
      no:"Docker | Compose",
      en:"Docker | Compose"
    },
    {
      no:"Google Cloud | GCP",
      en:"Google Cloud | GCP"
    },
    {
      no:"API | REST-API-er",
      en:"API | REST-APIs"
    },
    {
      no:"Nettverking",
      en:"Networking"
    },
    {
      no:"Programvare",
      en:"Software"
    },
    {
      no:"Mobilfiksing",
      en:"Mobile-repairer"
    },
    {
      no:"Maskinvare",
      en:"Hardware"
    },
    {
      no:"Smidig metodikk",
      en:"Agile development"
    },
    {
      no:"Programvaretesting",
      en:"Software Testing"
    },
    {
      no:"Linux",
      en:"Linux"
    },
    {
      no:"PowerShell",
      en:"PowerShell"
    }
  ]

  return (
    <>
      <div className="backgroundFullWidthImage" style={{ backgroundImage: "url('background-image.png')" }}>
        <div className="cover">
        </div>
        <div className="backgroundImageDiv">
          <div>
            <div className="divCenterElement width800">
              <span className="title t1 unbold">
                <b>Ahmad</b> Faryabi
              </span>
              <div className="unbold">
                Velkommen til min portefølje!
              </div>
              <button className="btn black">
                Se våre prosjekter
              </button>
              <button className="btn black">
                Se min CV
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bodyContainer">
        <span className="title t1 unbold">
          Om meg
        </span>
        <div className="unbold">
          {aboutMe.noText}
        </div>
        <div className="socialNetworks">

        </div>
      </div>
      <div className="fullBody greenColor">
        <div className="bodyContainer">
          <span className="title t1 unbold">
            Mine interesser
          </span>
          <div className="unbold">
            {interesser.noText}
            <p></p>
            <span className="title t2">
              Stikkord
            </span>
            {interestWord.map(word => (
              <span key={word.no} className="tag">
                {word.no}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="fullBody">
        <div className="bodyContainer">
          <span className="title t1 unbold">
            Mine ferdigheter
          </span>
          <div className="unbold">
            En liste over mine ferdigheter og kompetanse:
            <p></p>
            {skills.map(word => (
              <span key={word.no} className="tag">
                {word.no}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
