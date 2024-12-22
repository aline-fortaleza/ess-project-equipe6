Feature: Compartilhar reserva
	As a usuário do sistema
	I want to compartilhar uma reserva
	So that eu possa facilitar o planejamento com outras pessoas

Scenario: Compartilhar uma reserva
	Given eu estou na página “Hotel Centro de Informática”
	And vejo os ícones “compartilhar”, “salvar” e “gostar”
	When eu seleciono o ícone “compartilhar”
	And seleciono a opção “copiar link”
	Then eu copiei o link com sucesso
	And continuo na página “Hotel Centro de Informática”

Feature: Salvar reserva
	As a usuário do sistema
	I want to conseguir salvar uma reserva
	So that eu possa voltar naquela reserva facilmente 

Scenario: Salvar uma reserva (sucesso)
	Given eu estou na página “Hotel Centro de Informática”
	And estou logado em meu usuário
	And vejo os ícones “compartilhar”, “salvar” e “gostar”
	When eu seleciono o ícone “salvar”
	Then uma mensagem de confirmação é exibida
	And eu continuo na página “Hotel Centro de Informática”
