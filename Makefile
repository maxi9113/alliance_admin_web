build:
	docker build -t alliance_admin_web .

shell:
	docker run  -p 3000:3000 -it --rm -v $(shell pwd):/app --entrypoint=/bin/ash alliance_admin_web

run:
	docker run -p 3000:3000 -it --rm alliance_admin_web

setup-network:
	docker network inspect dpy-tests || docker network create dpy-tests

run-services:
	docker run --name fwd -it --rm -v ${HOME}/.kube/config:/root/.kube/config txn2/kubefwd services -n alliance