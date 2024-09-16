package route

import (
	"loly-fe/render"
	"loly-fe/service"

	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	service := service.NewService()
	render := render.NewRender(service)

	app.Get("/", render.IndexPage)
}
