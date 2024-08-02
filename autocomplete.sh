#!/bin/bash

_a_cli_autocomplete() {
  local cur prev prev2
  cur="${COMP_WORDS[COMP_CWORD]}"
  prev="${COMP_WORDS[COMP_CWORD-1]}"
  prev2="${COMP_WORDS[COMP_CWORD-2]}"
  
  # Define possible completions for each level of command hierarchy
  local commands="sdk:make sdk:build sdk:test"
  local sdk_make_options="app-interactions app-utilities"
  local submodules_options="Settings Profile"

  if [[ ${COMP_CWORD} -eq 1 ]]; then
    COMPREPLY=( $(compgen -W "${commands}" -- "${cur}") )
    return 0
  elif [[ ${COMP_CWORD} -eq 2 && ${prev} == sdk:make ]]; then
    COMPREPLY=( $(compgen -W "${sdk_make_options}" -- "${cur}") )
    return 0
  elif [[ ${COMP_CWORD} -eq 3 && ${prev2} == sdk:make ]]; then
    # Assume the second argument after sdk:make is a name like "Product"
    COMPREPLY=()
    return 0
  elif [[ ${COMP_CWORD} -eq 4 && ${prev} == -* ]]; then
    local options="-submodules"
    COMPREPLY=( $(compgen -W "${options}" -- "${cur}") )
    return 0
  elif [[ ${COMP_CWORD} -eq 5 && ${prev} == -submodules ]]; then
    COMPREPLY=( $(compgen -W "${submodules_options}" -- "${cur}") )
    return 0
  fi
}

complete -F _a_cli_autocomplete a-cli
