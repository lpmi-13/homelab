#! /bin/bash

ANSIBLE_CONFIG=ansible/pihole.cfg ansible-playbook -i ansible/hosts ansible/pihole_setup_playbook.yml
