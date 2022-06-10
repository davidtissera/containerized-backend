run-production:
	docker run -d -p 80:80 backend-production

run-development:
	docker run -d -p 5000:5000 backend-development
