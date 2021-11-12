#! /bin/bash

ANSIBLE_CONFIG=ansible/monitor.cfg ansible-playbook -i ansible/hosts ansible/monitor_setup_playbook.yml
