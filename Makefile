dev:
	npm run serve

build:
	npm run build

preview:
	npm run preview

deploy:
	npm run build
	tar czvf dji.tgz dist
	scp -P 6322 dji.tgz evan@kinghighway.com:~
	rm dji.tgz
	ssh -p 6322 evan@kinghighway.com

sh:
	devbox shell
