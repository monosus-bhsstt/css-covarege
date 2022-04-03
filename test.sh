domain='https://www.sonysonpo.co.jp/'
page="${1/$domain/http/}"
mkdir http
rm -rf http/**
wget -p -H -E -nH  -P http --exclude-domains $domain $1
cd http
ls  | grep -v -E "^share|fire|auto|$page" | xargs rm -rf
cd ../
grep -o '"\/[a-z].*css' $page > grepCss.txt

# パラメータ付きファイルのリネーム
find ./http/ -name '*\?*' | rename 's/\?.*//'