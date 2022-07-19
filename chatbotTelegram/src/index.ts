import {Context, Telegraf} from 'telegraf'
import {MenuMiddleware, MenuTemplate}  from 'telegraf-inline-menu'
import {getInicioClases} from './service'
import config from './config'
const {BOT_TOKEN} = config;

const menuTemplate = new MenuTemplate<any>(ctx => {
	const text = 'Chatbot del calendario academico de la *ULEAM* 🤖'
	return {
		text, 
		parse_mode: 'Markdown'}
})
menuTemplate.interact('Inicio Clases', 'a', {
	do: async (ctx:any) => {
		const data = await getInicioClases(1)		
		const fecha = new Date(data.data.inicioClases).toLocaleDateString()
		await ctx.answerCbQuery(`Inicio de clases: ${fecha}`)
		return false
	}
})

menuTemplate.interact('Exámenes P1', 'b', {
	joinLastRow: true,
	do: async (ctx:any) => {
		const data = await getInicioClases(5)		
		const fechaInicio = new Date(data.data.evaluacionP1.fechaInicio).toLocaleDateString()
		const fechaFin= new Date(data.data.evaluacionP1.fechaFin).toLocaleDateString()
		await ctx.answerCbQuery(`Examenes Parcial 1: ${fechaInicio} - ${fechaFin}`)
		return false
	}
})

menuTemplate.interact('Exámenes P2', 'c', {
	joinLastRow: true,
	do: async (ctx:any) => {
		const data = await getInicioClases(6)		
		const fechaInicio = new Date(data.data.evaluacionP2.fechaInicio).toLocaleDateString()
		const fechaFin= new Date(data.data.evaluacionP2.fechaFin).toLocaleDateString()
		await ctx.answerCbQuery(`Examenes Parcial 2: ${fechaInicio} - ${fechaFin}`)
		return false
	}
})

menuTemplate.interact('Matrícula Ordinaria', 'd', {
	do: async (ctx:any) => {
		const data = await getInicioClases(3)		
		const fechaInicio = new Date(data.data.matriculaOrdinaria.fechaInicio).toLocaleDateString()
		const fechaFin= new Date(data.data.matriculaOrdinaria.fechaFin).toLocaleDateString()
		await ctx.answerCbQuery(`Matrícula Ordinaria: ${fechaInicio} - ${fechaFin}`)
		return false
	}
})

menuTemplate.interact('Matrícula Extraordinaria', 'e', {
	joinLastRow: true,
	do: async (ctx:any) => {
		const data = await getInicioClases(4)		
		const fechaInicio = new Date(data.data.matriculaExtraordinaria.fechaInicio).toLocaleDateString()
		const fechaFin= new Date(data.data.matriculaExtraordinaria.fechaFin).toLocaleDateString()
		await ctx.answerCbQuery(`Matrícula Extraordinaria: ${fechaInicio} a ${fechaFin}`)
		return false
	}
})

menuTemplate.interact('Próximos Feriados', 'f', {
	do: async (ctx:any) => {
		await ctx.answerCbQuery('No hay feriados 😪')
		return false
	}
})

const bot = new Telegraf(BOT_TOKEN as string)
const menuMiddleware = new MenuMiddleware('/', menuTemplate)

bot.command('start', async(ctx:Context) => {
	await ctx.replyWithPhoto('https://www.uleam.edu.ec/wp-content/uploads/2012/09/LOGO-ULEAM-VERTICAL.png')
	menuMiddleware.replyToContext(ctx)
})
bot.use(menuMiddleware)

bot.launch()