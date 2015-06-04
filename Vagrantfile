# Vagrantfile for Fedora 22 Atomic Host

Vagrant.configure(2) do |config|

  config.vm.box = "f22atomic"

  config.vm.provider "libvirt" do |libvirt|
    libvirt.driver = "kvm"
    libvirt.memory = 2048
    libvirt.cpus = 4
  end

  config.vm.provision "shell", path: "http://192.168.1.33/~joe/provisioner.sh"

  
end
