package render

import "loly-fe/service"

const (
	FavIconUrl = "/assets/images/favicon.png"
)

type Render struct {
	service *service.Service
}

func NewRender(service *service.Service) *Render {
	return &Render{service: service}
}
