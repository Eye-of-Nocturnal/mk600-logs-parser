#! /usr/bin/env nix-shell
#! nix-shell -i bash -p bash gnutar gnupg

WRAPPED_FILE_PATH=$1

if [ -z "${WRAPPED_FILE_PATH}" ]; then
   echo "Must provide wrapped file path. Exiting...."
   exit 1
fi

gpg --pinentry-mode loopback -d $WRAPPED_FILE_PATH | tar -x $WRAPPED_FILE_PATH.unwrapped
