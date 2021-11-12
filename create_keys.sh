#! /bin/sh

if [ $# -eq 0 ]; then
  echo "please pass in a name for the generated keys, for example: \n ./create_keys.sh homelab"

  exit 1
fi

KEY_NAME=$1

ssh-keygen -t ed25519 -o -a 100 -f ansible/$KEY_NAME -N ""
