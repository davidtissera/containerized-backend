run-production:
	docker run -d -p 80:80 docker-course-backend-production

run-development:
	docker run -d -p 5000:5000 docker-course-backend-development
