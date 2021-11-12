#! /bin/bash

ANSIBLE_CONFIG=ansible/base_config.cfg ansible-playbook -i ansible/base_hosts ansible/base_config_playbook.yml
