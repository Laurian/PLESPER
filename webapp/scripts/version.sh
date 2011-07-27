cd ../../
git log -n 1 | grep commit | awk '{print "commit="$2}'
