Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/xenial64"
  config.vm.synced_folder "./app", "/var/www/midi2mp3-service"
  config.vm.provision :shell, path: "bootstrap.sh"
end