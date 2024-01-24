const diaDaFormatura = new Date("Apr 29, 2024 18:00:00")
const TimeStampDaFormatura = diaDaFormatura.getTime()

const contador = setInterval(()=>{
    const now = new Date()
    const TimeStampNow = now.getTime()

    const distanciaAteOEvento = TimeStampDaFormatura - TimeStampNow

    const diaEmMilsec = 1000 * 60 * 60 * 24
    const horaEmMilsec = 1000 * 60 * 60
    const minutosEmMilsec = 1000 * 60

    const diasAteOEvento = Math.floor(distanciaAteOEvento/diaEmMilsec)

    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMilsec) / horaEmMilsec)

    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMilsec) / minutosEmMilsec)

    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMilsec) / 1000)

    const contagemNaTela = document.querySelector('#contador')

    contagemNaTela.innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if(distanciaAteOEvento < 0){
        clearInterval(contador)
        contagemNaTela.innerHTML = "Contagem regressiva finalizada, o autor já está formado como Desenvolvedor Front-End!"
    }

}, 1000)