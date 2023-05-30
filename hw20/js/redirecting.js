let link = "example.com"

const validateUrlWRegExp = (link, protocol) =>
	!new RegExp(`/^${protocol}?:\/\//i`).test(link) ? `${protocol}://${link}` : link

document.getElementById("btnRedirectWithHttp").addEventListener("click", function () {
	window.location.href = validateUrlWRegExp(link, "http")
})

document.getElementById("btnRedirectWithHttps").addEventListener("click", function () {
	window.location.href = validateUrlWRegExp(link, "https")
})

