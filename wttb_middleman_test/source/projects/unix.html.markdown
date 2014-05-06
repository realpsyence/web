#### Unix/Linux/Bash Resources 

Just a list of simple tricks/tips I've needed to look up more than once.

set title of tmux pane from bash prompt:

    printf '\033kThis_is_your_title\033\\'

favorite aliases to go in .bashrc/.profile:

    alias hig = 'history | grep'
    alias pig = 'ps aux | grep'

extract vmlinux from bzImage:

    # Change bzImage to your compressed kernel name
    dd bs=1 skip=$(xxd -g0 -p /boot/bzImage.x86_64 | \
        tr -d '\n' | grep -b -o 1f8b0800 | awk -F: '{print $1/2}') \
        if=/boot/bzImage.x86_64 | gzip -d -c > /tmp/vmlinux
    # 0x1f8b0800 is the gzip header...

leave off the trailing / on rsync? Have a new folder!

merge a single file from a git branch to your current one

    git checkout --patch BRANCH file_to_merge

want to add a new file from a different branch to the current one?
leave off the --patch for savings!

USE TMUX! USE MOSH!!!
