echo -n > merge.css
file=`cat grepCss.txt`
domain='https://www.sonysonpo.co.jp/'

for f in $file;do
fPath=http${f//\"/}
gFPath=$domain${f//\"/}
# echo -e $fPath

if [ ! -e $fPath ]; then

echo $fPath
fi
cat http/${f//\"/} >> merge.css
done

# npx prettier --write merge.css
js=`cat grepjs.txt |  xargs`
npx purgecss --css merge.css --content http/**/*.html src/**/*.js $js -o merge.css