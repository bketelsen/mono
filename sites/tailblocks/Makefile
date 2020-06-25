.POSIX:
DESTDIR=public
ZOLA_VERSION=0.10.1


.PHONY: all
all: clean get build test deploy


.PHONY: clean
clean:
	@echo "🧹 Cleaning old build"
	@if [ -d $(DESTDIR) ]; then cd $(DESTDIR) && rm -rf *; fi

.PHONY: get
get:
	@echo "❓ Checking for zola"
	@if ! [ -x "$$(command -v zola)" ]; then\
		echo "🤵 Getting Zola";\
		cd ./bin && ./setup.sh $(ZOLA_VERSION);\
		zola -V;\
	fi

.PHONY: build
build:
	@echo "🍳 Generating site"
	zola build --output-dir $(DESTDIR)


.PHONY: test
test:
	@echo "🍜 Testing HTML"
	docker run -v $(GITHUB_WORKSPACE)/$(DESTDIR)/:/mnt 18fgsa/html-proofer mnt --disable-external

.PHONY: deploy
deploy:
	@echo "🎁 Preparing commit"
	@cd $(DESTDIR) \
	&& git config user.email "hello@victoria.dev" \
	&& git config user.name "Victoria via GitHub Actions" \
	&& git add . \
	&& git status \
	&& git commit -m "🤖 CD bot is helping" \
	&& git push -f -q https://$(TOKEN)@github.com/victoriadrake/victoriadrake.github.io.git master
	@echo "🚀 Site is deployed!"