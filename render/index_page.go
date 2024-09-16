package render

import "github.com/gofiber/fiber/v2"

func (r *Render) IndexPage(ctx *fiber.Ctx) error {

	title := "หน้าแรก"

	// userData := GetUserDataFromCtx(ctx)
	// if utils.StringIsEmpty(userData.Username) {
	// 	return ctx.Redirect("/login")
	// }

	// if userData.Role != "ADMIN" {
	// 	return ctx.Redirect("/")
	// }

	return ctx.Render("index_page", fiber.Map{
		"title_page":   title,
		"favicon_page": FavIconUrl,
		// "user_data": fiber.Map{
		// 	"user_id":    userData.UserId,
		// 	"username":   userData.Username,
		// 	"user_image": userData.UserImage,
		// 	"role":       userData.Role,
		// 	"token":      userData.Token,
		// },
	}, "layout")
}
