VERSION=${1:-v0.10.1}

wget https://github.com/getzola/zola/releases/download/$VERSION/zola-$VERSION-x86_64-unknown-linux-gnu.tar.gz
tar -zxvf zola-*
rm -rf zola-*.tar.gz