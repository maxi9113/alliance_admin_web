PROJECT_NAME=alliance_admin_web

build:
	docker build -t ${PROJECT_NAME} .

shell:
	docker run  -p 3000:3000 -it --rm -v $(shell pwd):/app --entrypoint=/bin/ash ${PROJECT_NAME}

run:
	docker run -p 3000:3000 -it --rm ${PROJECT_NAME}

setup-network:
	docker network inspect dpy-tests || docker network create dpy-tests

run-services:
	docker run --name fwd -it --rm -v ${HOME}/.kube/config:/root/.kube/config txn2/kubefwd services -n alliance