Hooks.on('createJournalEntry', (journalEntry, options, userId) => {
    const user = game.users.get(userId);
    if (!user.isGM && !user.isAssistant && user.can("JOURNAL_CREATE") && journalEntry.data.permission.default !== CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER && journalEntry.data.permission.default !== CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER) {
        console.log(`User ${user.name} updated journal entry ${journalEntry.name}`);
        journalEntry.update({permission:{default: CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER}});
    }
});