if [[ "$(sysctl -n hw.model)" == "Macmini"* ]]; then
  PS1="%B%F{cyan}%n@macmini%f%b %1~ %# "
else
  PS1="%B%F{cyan}%n@macbook%f%b %1~ %# "
fi
HOMEBREW_AUTO_UPDATE_SECS=86400

eval "$(direnv hook zsh)"

export SAM_CLI_TELEMETRY=0
# The following lines have been added by Docker Desktop to enable Docker CLI completions.
fpath=(/Users/ram/.docker/completions $fpath)
autoload -Uz compinit
compinit
# End of Docker CLI completions
