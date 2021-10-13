# Homelab

I decided to actually start working on my knowledge of prometheus/grafana/etc, I would start up a homelab. Actually getting my hands dirty with different VMs, networking issues, and monitoring/observability is the way I learn best, so I'm gonna just set up something in my own subnet sandbox and break it any way I please!

![the current setup](homelab_diagram.png)

## Specs

- Raspberry Pi (CloudyPie)

Pi 3 Model B Plus Rev 1.3, running Pi OS Lite (headless)
ARMv7 rev 4 (v7l) 4 Core 1.2 GHz
1 GB RAM

Running the pihole, and probably not much else.

- Raspberry Pi (Cloud Monet)

Pi 4 Model B, running Pi OS Lite (headless)
TBD
4GB RAM

Running the prometheus server, collecting metrics from the rest of the lab and displaying via grafana.

- Mac Mini (Mac McCloud)

2012 Mac Mini with 16GB RAM, i7 quad-core

Running _some_ sort of services, probably scraping stuff and putting into S3...

## Goals

(for all the below, the eventual idea is to have them creatable from source control via automation)

- Learn to set up and configure a prometheus instance
- Learn to set up grafana dashboards customized to my heart's content
- Learn to orchestrate some VMs in a repeatable and declarative fashion
- Learn to deploy services to these VMs and instrument them
- Learn what reasonable SLI's are for these services (I'm the only user, so I'll probably just have to make these up).
- Learn and experiment with different ways to set up a virtualized/containerized environment (qemu/podman/etc)

...and as long as I'm creating services that _do_ things, I'll probably put them to work gathering data for a code corpus or a "how to write like a dev" course, or something equally silly like that.
